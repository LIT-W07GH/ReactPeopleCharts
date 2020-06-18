using Microsoft.EntityFrameworkCore;

namespace ReactPeopleChart.Data
{
    public class PeopleChartContext : DbContext
    {
        private readonly string _connectionString;

        public PeopleChartContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Person> People { get; set; }
    }
}