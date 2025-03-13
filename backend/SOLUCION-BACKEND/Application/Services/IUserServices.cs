using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public interface IUserService
    {
        Task<User> CreateUserAsync(string nombre, string email, string password);
        Task<User> UpdateUserAsync(int id, string nombre, string email, string password);
        Task<User> LoginAsync(string email, string password);
    }
}
