using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class UserRole
    {
        [Key]
        public Guid Id { get; set; }
        public Guid IdUser { get; set; }
        public User? User { get; set; }

        public Guid IdRole { get; set; }
        public Role? Role { get; set; }
    }
}
