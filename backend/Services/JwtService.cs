using System;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;


namespace react_typescript_dotnet_app.Services
{
    public class JtwService
    {
        private string secureKey = "this is a very secure key";
        public string Generate(int id)
        {
            // All the steps below are required to create a Jwt string:
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secureKey));
            var credentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256Signature);
            var header = new JwtHeader(credentials);
            
            var payload = new JwtPayload(id.ToString(), null, null, null, DateTime.Today.AddDays(1));
            var securityToken = new JwtSecurityToken(header, payload);
            
            return new JwtSecurityTokenHandler().WriteToken(securityToken);

        }
    }
}