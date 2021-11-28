using Microsoft.EntityFrameworkCore.Migrations;

namespace react_typescript_dotnet_app.Migrations
{
    public partial class UpdateHotelLocation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Hotels",
                newName: "Location");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Location",
                table: "Hotels",
                newName: "Address");
        }
    }
}
