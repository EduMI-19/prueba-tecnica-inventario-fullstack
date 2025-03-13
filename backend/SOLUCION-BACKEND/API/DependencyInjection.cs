using Infraestructure;

namespace API
{
    public static class DependencyInjection
    {
        public static void AddServices(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddInfrastructureServices(configuration);

        }

    }
}
