using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Persistence;

using Domain;
using Microsoft.EntityFrameworkCore;

public class DataContext : IdentityDbContext<AppUser>
{
    public DataContext(DbContextOptions options) : base(options)
    {
    }

    public DbSet<Activity> Activities { get; set; }
}

