using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using agencywebsite.Models;

namespace agencywebsite.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        ViewData["User"] = "Alice";
        return View();
    }

    public IActionResult Privacy()
    {
        string[] cities = {"New York", "Los Angeles", "Chicago", "Houston", "Phoenix"};
        ViewData["Cities"] = cities;
        return View();
    }

    public IActionResult Terms()
    {
        return View();
    }
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
