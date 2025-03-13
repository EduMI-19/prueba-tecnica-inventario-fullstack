using Application.Services;
using Domain.Entities;
using Domain.Helpers;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Services
{
    public class UserService : IUserService
    {
        private readonly ApplicationDbContext _context;

        public UserService(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<User> CreateUserAsync(string nombre, string email, string password)
        {
            var usuario = new User
            {
                Name = nombre,
                Email = email,
                Password = EncryptionHelper.Encrypt(password)
            };

            _context.Users.Add(usuario);
            await _context.SaveChangesAsync();

            return usuario;
        }

        public async Task<User> UpdateUserAsync(int id, string nombre, string email, string password)
        {
            var usuario = await _context.Users.FindAsync(id);
            if (usuario == null)
            {
                return null!;
            }

            usuario.Name = nombre;
            usuario.Email = email;
            usuario.Password = EncryptionHelper.Encrypt(password);

            _context.Users.Update(usuario);
            await _context.SaveChangesAsync();

            return usuario;
        }

        public async Task<User> LoginAsync(string email, string password)
        {
            var usuario = await _context.Users.SingleOrDefaultAsync(u => u.Email == email);
            if (usuario == null || EncryptionHelper.Decrypt(usuario.Password!) != password)
            {
                return null!;
            }

            return usuario;
        }
    }
}