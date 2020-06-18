using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactPeopleChart.Data;

namespace ReactPeopleChart.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connectionString;

        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getall")]
        public List<Person> GetAll()
        {
            var repo = new PeopleRepository(_connectionString);
            return repo.GetPeople();
        }

        [HttpPost]
        [Route("addperson")]
        public void AddPerson(Person person)
        {
            var repo = new PeopleRepository(_connectionString);
            repo.AddPerson(person);
        }

        [HttpPost]
        [Route("addrandompeople")]
        public void AddRandomPeople(AddRandomViewModel viewModel)
        {
            var people = Enumerable.Range(1, viewModel.Amount).Select(_ => new Person
            {
                FirstName = Faker.Name.First(),
                LastName = Faker.Name.Last(),
                Age = Faker.RandomNumber.Next(viewModel.MinAge, viewModel.MaxAge)
            });

            var repo = new PeopleRepository(_connectionString);
            repo.AddPeople(people);
        }
    }
}