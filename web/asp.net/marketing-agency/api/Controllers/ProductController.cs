using Microsoft.AspNetCore.Mvc;

namespace api.Controllers;

[ApiController]
public class ProductController : ControllerBase
{
    [Route("api/products")]

    [HttpGet]
    public IActionResult GetProductsVariants()
    {
        string[] productVariants = {
            "#1a3151", "#071731", "#1b4478", "#325369", "#59788a", "#7791a0", "#6f8291", "#3f4c59", "#546b82", "#1d334d"
        };

        return Ok(new {
            status = true,
            variants = productVariants
        });
    }
}
