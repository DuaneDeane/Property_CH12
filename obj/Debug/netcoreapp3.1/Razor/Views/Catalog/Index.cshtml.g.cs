#pragma checksum "/Users/lilboom/Desktop/SDGKU/107/PropertyRental/Views/Catalog/Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "8a0d0f858ba77cd43691f03932bbcd885a6eec49"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Catalog_Index), @"mvc.1.0.view", @"/Views/Catalog/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/Users/lilboom/Desktop/SDGKU/107/PropertyRental/Views/_ViewImports.cshtml"
using PropertyRental;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "/Users/lilboom/Desktop/SDGKU/107/PropertyRental/Views/_ViewImports.cshtml"
using PropertyRental.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8a0d0f858ba77cd43691f03932bbcd885a6eec49", @"/Views/Catalog/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a59eb52cf4fd9ebb4436dd5a1fef24adf2457ae8", @"/Views/_ViewImports.cshtml")]
    public class Views_Catalog_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "/Users/lilboom/Desktop/SDGKU/107/PropertyRental/Views/Catalog/Index.cshtml"
  
    ViewData["Title"] = "Catalog";

#line default
#line hidden
#nullable disable
            WriteLiteral("\n<h1>Our Amazing Catalog</h1>\n\n\n<div id=\"catalog-container\">\n\n</div>\n\n\n\n");
            DefineSection("Styles", async() => {
                WriteLiteral("\n    <link href=\"/css/catalog.css\" rel=\"stylesheet\">\n");
            }
            );
            WriteLiteral("\n");
            DefineSection("Scripts", async() => {
                WriteLiteral("\n    <script src=\"/js/catalog.js\"></script>\n");
            }
            );
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
