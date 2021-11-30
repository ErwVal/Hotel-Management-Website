﻿// <auto-generated />
using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using react_typescript_dotnet_app;

namespace react_typescript_dotnet_app.Migrations
{
    [DbContext(typeof(DatabaseDBContext))]
    [Migration("20211129112334_CreateHotelDB")]
    partial class CreateHotelDB
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 63)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

            modelBuilder.Entity("react_typescript_dotnet_app.Models.Database.Hotel", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("HotelName")
                        .HasColumnType("text");

                    b.Property<string>("Location")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Hotels");
                });

            modelBuilder.Entity("react_typescript_dotnet_app.Models.Database.Reservation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<DateTime>("CheckIn")
                        .HasColumnType("timestamp without time zone");

                    b.Property<DateTime>("CheckOut")
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("GuestName")
                        .HasColumnType("text");

                    b.Property<int?>("HotelId")
                        .HasColumnType("integer");

                    b.Property<int>("NumGuests")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("HotelId");

                    b.ToTable("Reservations");
                });

            modelBuilder.Entity("react_typescript_dotnet_app.Models.Database.Room", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<int>("Available")
                        .HasColumnType("integer");

                    b.Property<int>("HotelId")
                        .HasColumnType("integer");

                    b.Property<List<string>>("Images")
                        .HasColumnType("text[]");

                    b.Property<int>("MaxGuests")
                        .HasColumnType("integer");

                    b.Property<int?>("ReservationId")
                        .HasColumnType("integer");

                    b.Property<double>("RoomPrice")
                        .HasColumnType("double precision");

                    b.Property<int>("RoomType")
                        .HasColumnType("integer");

                    b.HasKey("Id");

                    b.HasIndex("HotelId");

                    b.HasIndex("ReservationId");

                    b.ToTable("Rooms");
                });

            modelBuilder.Entity("react_typescript_dotnet_app.Models.Database.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("integer")
                        .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn);

                    b.Property<string>("HashedPassword")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<byte[]>("Salt")
                        .HasColumnType("bytea");

                    b.Property<string>("Username")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("react_typescript_dotnet_app.Models.Database.Reservation", b =>
                {
                    b.HasOne("react_typescript_dotnet_app.Models.Database.Hotel", null)
                        .WithMany("Reservations")
                        .HasForeignKey("HotelId");
                });

            modelBuilder.Entity("react_typescript_dotnet_app.Models.Database.Room", b =>
                {
                    b.HasOne("react_typescript_dotnet_app.Models.Database.Hotel", null)
                        .WithMany("Rooms")
                        .HasForeignKey("HotelId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("react_typescript_dotnet_app.Models.Database.Reservation", null)
                        .WithMany("BookedRooms")
                        .HasForeignKey("ReservationId");
                });

            modelBuilder.Entity("react_typescript_dotnet_app.Models.Database.Hotel", b =>
                {
                    b.Navigation("Reservations");

                    b.Navigation("Rooms");
                });

            modelBuilder.Entity("react_typescript_dotnet_app.Models.Database.Reservation", b =>
                {
                    b.Navigation("BookedRooms");
                });
#pragma warning restore 612, 618
        }
    }
}