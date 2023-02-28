using Application.Activities;
using Application.Core;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions;

public static class ApplicationServiceExtensions
{
    public static void AddApplicationServices(this WebApplicationBuilder builder, String corsPolicyName)
    {
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();
        builder.Services.AddDbContext<DataContext>(opt =>
        {
            opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
        });
        builder.Services.AddCors(opt =>
        {
            opt.AddPolicy(corsPolicyName,
                policy =>
                {
                    policy.WithOrigins("http://localhost:3000")
                        .AllowAnyHeader()
                        .AllowAnyMethod();
                });
        });
        builder.Services.AddMediatR(cfg => cfg.RegisterServicesFromAssemblyContaining<List.Handler>());
        builder.Services.AddAutoMapper(typeof(MappingProfiles).Assembly);
    }
}