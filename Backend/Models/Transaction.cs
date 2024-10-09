namespace ExpTrack.Models
{
    // Models/Transaction.cs
    public class Transaction
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public int CategoryId { get; set; }
        public Category? Category { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
    }

    // Models/Category.cs
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Transaction>? Transactions { get; set; }
    }

    // Models/Goal.cs
    public class Goal
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal TargetAmount { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
    }

    // Models/User.cs
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<Transaction>? Transactions { get; set; }
        public List<Goal>? Goals { get; set; }
    }

}
