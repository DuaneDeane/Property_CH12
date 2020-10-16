
using Microsoft.AspNetCore.Mvc;
using PropertyRental.Models;
using System.Linq;

namespace PropertyRental.Controllers
{
    public class CatalogController : Controller
    {
        private DataContext dbContext;
        public CatalogController(DataContext db)
        {
            dbContext = db;
        }
        public IActionResult Index()
        {
            return View(); // catalog page
        }

        public IActionResult Register()
        {
            return View(); // register page
        }
        
         public IActionResult Catalog()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GetProperties()
        {
            var data = dbContext.Properties.ToList();
            return Json(data);
        }
       [HttpDelete]
       public IActionResult DeleteProperty(int id)
       {
           var theProperty = dbContext.Properties.Find(id);
           dbContext.Properties.Remove(theProperty);
           dbContext.SaveChanges();

           return Ok();
       }

       [HttpPost]
        public IActionResult SaveProperty([FromBody] Property theProperty)
        {
            System.Console.WriteLine("Saving a property");
            System.Console.WriteLine(theProperty.Address);

            dbContext.Properties.Add(theProperty);
            dbContext.SaveChanges();

            return Json(theProperty);
        }
    }
}