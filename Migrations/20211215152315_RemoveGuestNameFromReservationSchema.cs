using Microsoft.EntityFrameworkCore.Migrations;

namespace react_typescript_dotnet_app.Migrations
{
    public partial class RemoveGuestNameFromReservationSchema : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GuestName",
                table: "Reservations");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "GuestName",
                table: "Reservations",
                type: "text",
                nullable: true);
        }
    }
}
