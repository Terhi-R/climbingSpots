using System.Data.Common;
using Microsoft.Data;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace SpotCollection.Tests;

public class SqliteLocationsUnitTests : SpotCollectionUnitTests, IDisposable
{
    private readonly DbConnection _connection;
    public SqliteLocationsUnitTests()
        : base(new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseSqlite(CreateInMemoryDatabase())
            .Options)
    {
        _connection = RelationalOptionsExtension.Extract(ContextOptions).Connection!;
    }

    private static DbConnection CreateInMemoryDatabase()
    {
        var connection = new SqliteConnection("Filename=:memory:");
        connection.Open();
        return connection;
    }

    public void Dispose() => _connection.Dispose();
} 