using System;
class Program
{
    public static void Main(string[] args)
    {
        int disc = 2;
        Console.WriteLine("Enter shopping amount: ");
        int amount = Convert.ToInt32(Console.ReadLine());

        if (amount > 10000)
        {
            int disamount = amount * disc / 100;
            int total = amount - disamount;
            Console.WriteLine("Amount after discount: " + total);
        }
        else
        {
            Console.WriteLine("Amount: " + amount);
        }
    }
}

