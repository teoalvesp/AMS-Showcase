using Microsoft.AspNetCore.Mvc;

namespace School.Backend.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return PartialView("_Partials/_Dashboard");
        }
    }
}
