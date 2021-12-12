using Microsoft.EntityFrameworkCore.Migrations;

namespace react_typescript_dotnet_app.Migrations
{
    public partial class RemovedUsernameFromUsers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Username",
                table: "Users");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Username",
                table: "Users",
                type: "text",
                nullable: true);
        }
    }
}
