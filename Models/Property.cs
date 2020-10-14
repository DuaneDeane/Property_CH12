namespace PropertyRental.Models
{
    public class Property
    {
        public int Id {get; set;}
        public string Address {get; set;}
        public int Beds {get; set;}
        public int Baths {get; set;}
        public decimal Price {get; set;}
        public int Size {get; set;}
        public string Picture {get; set;}
        public string Description {get; set;}
        public bool Parking {get; set;}
    }
}