using System;
class Program
{
    public static void Main(string[] args)
    {
        int product = 1;
        for (int i = 1; i <= 10; i++)
        {
            if (i % 2 == 1)
            {
                product = product * i;
            }
        }
        Console.WriteLine("Product of first 10 odd numbers: " + product);
    }
}