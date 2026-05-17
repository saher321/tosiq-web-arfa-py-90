var builder = WebApplication.CreateBuilder(args);
builder.Services.AddOpenApi();
var app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.MapGet("/", () => {
    return "Hello World";
});
app.MapGet("/tagColors", () => {
    string[] tagColors = {
        "#1a3151", "#071731", "#1b4478", "#325369", "#59788a", "#7791a0", "#6f8291", "#3f4c59", "#546b82", "#1d334d"
    };
    return tagColors;
});
app.Run();

