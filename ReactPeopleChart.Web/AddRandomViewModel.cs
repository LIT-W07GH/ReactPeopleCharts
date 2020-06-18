using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;

namespace ReactPeopleChart.Web
{
    public class AddRandomViewModel
    {
        public int Amount { get; set; }
        public int MinAge { get; set; }
        public int MaxAge { get; set; }
    }
}
