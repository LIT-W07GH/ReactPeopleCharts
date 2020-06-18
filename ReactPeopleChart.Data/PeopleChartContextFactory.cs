using System.IO;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace ReactPeopleChart.Data
{
    public class PeopleChartContextFactory : IDesignTimeDbContextFactory<PeopleChartContext>
    {
        public PeopleChartContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}ReactPeopleChart.Web"))
                .AddJsonFile("appsettings.json")
                .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new PeopleChartContext(config.GetConnectionString("ConStr"));
        }
    }
}