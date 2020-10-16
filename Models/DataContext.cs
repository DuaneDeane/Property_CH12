using Microsoft.EntityFrameworkCore;

namespace PropertyRental.Models
{
    public class DataContext : DbContext
    {

        /*
        Run migrations everytime something changes on the models

        - dotnet ef migrations add <someName>
        - dotnet ef database update
    */
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {  
        }

        public DbSet<Property> Properties {get; set;}
    }
}