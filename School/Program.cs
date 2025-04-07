var builder = WebApplication.CreateBuilder(args);

// Adiciona Controllers com suporte a Razor Views
builder.Services.AddControllersWithViews()
    .AddApplicationPart(typeof(School.Backend.Controllers.HomeController).Assembly)
    .AddRazorOptions(options =>
    {
        // Define onde procurar as Views
        options.ViewLocationFormats.Clear();
        options.ViewLocationFormats.Add("/Frontend/Views/{1}/{0}.cshtml");
        options.ViewLocationFormats.Add("/Frontend/Views/Shared/{0}.cshtml");
    });

var app = builder.Build();

// Configurações do pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run(); //
