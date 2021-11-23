namespace react_typescript_dotnet_app.Models.Database
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string HashedPassword { get; set; }
        public byte[] Salt { get; set; }
    }
}