using System.ComponentModel.DataAnnotations;

namespace SpotCollection.Api.Models;

public class Location
{
    [Key]
    public int Id { get; set; }
    public required string Name { get; set; }
    public required string Country { get; set; }
    public string? ClosestCity { get; set; }
    public string? Description { get; set; }
    public string? RecommendedBook { get; set; }
    public string? Image { get; set; }
    public string? FavoriteRoute { get; set; }
    public virtual List<Wall>? Walls { get; set; }
}


