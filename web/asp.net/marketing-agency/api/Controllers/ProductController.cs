using Microsoft.AspNetCore.Mvc;
using api.Data;
using api.Models;

namespace api.Controllers;

[ApiController]
[Route("api/products")]
public class ProductController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProductController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("add")]
    public IActionResult AddProduct(Product product)
    {
        _context.Products.Add(product);
        _context.SaveChanges();

        return Ok(new
        {
            status = true,
            message = "Product added successfully",
            data = product
        });
    }

    [HttpGet("all")]
    public IActionResult ViewProducts()
    {
        var products = _context.Products.ToList();

        if (products.Count > 0) {
            return Ok(new {
                status = true,
                products
            });
        } else {
            return Ok(new {
                status = false,
                message= "No products were found"
            });
        }
    }

    [HttpDelete("delete/{id}")]
    public IActionResult DeleteProduct(int id)
    {
        var product = _context.Products.Find(id);

        if (product == null) {
            return Ok(new {
                status = false,
                message= "Product not found"
            });
        } else {
            _context.Products.Remove(product);
            _context.SaveChanges();
            return Ok(new {
                status = true,
                message= "Product has been deleted"
            });
        }
    }

    [HttpGet("view/{id}")]
    public IActionResult ViewProduct(int id)
    {
        var product = _context.Products.Find(id);

        if (product == null) {
            return Ok(new {
                status = false,
                message= "Product not found"
            });
        } else {
            return Ok(new {
                status = true,
                product
            });
        }
    }

    [HttpGet("variants")]
    public IActionResult GetProductsVariants()
    {
        string[] productVariants =
        {
            "#1a3151",
            "#071731",
            "#1b4478",
            "#325369",
            "#59788a",
            "#7791a0",
            "#6f8291",
            "#3f4c59",
            "#546b82",
            "#1d334d"
        };

        return Ok(new
        {
            status = true,
            variants = productVariants
        });
    }
}