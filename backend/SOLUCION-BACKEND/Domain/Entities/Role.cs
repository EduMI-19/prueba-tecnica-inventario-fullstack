﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Role
    {
        [Key]
        public Guid Id { get; set; }
        public string? NameRole { get; set; }

        public ICollection<UserRole>? UserRoles { get; set; }
    }
}
