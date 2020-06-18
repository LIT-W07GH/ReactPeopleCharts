using System.Collections.Generic;
using System.Linq;

namespace ReactPeopleChart.Data
{
    public class PeopleRepository
    {
        private readonly string _connectionString;

        public PeopleRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetPeople()
        {
            using (var context = new PeopleChartContext(_connectionString))
            {
                return context.People.ToList();
            }
        }

        public void AddPerson(Person person)
        {
            using (var context = new PeopleChartContext(_connectionString))
            {
                context.People.Add(person);
                context.SaveChanges();
            }
        }

        public void AddPeople(IEnumerable<Person> people)
        {
            using (var context = new PeopleChartContext(_connectionString))
            {
                context.People.AddRange(people);
                context.SaveChanges();
            }
        }
    }
}