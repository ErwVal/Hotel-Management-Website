using Microsoft.EntityFrameworkCore.Migrations;

namespace react_typescript_dotnet_app.Migrations
{
    public partial class AddRoomsAvailableColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Available",
                table: "Rooms",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Available",
                table: "Rooms");
        }
    }
}
