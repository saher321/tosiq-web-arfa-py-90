using System;
class Program
{
    public static void Main(string[] args)
    {
        int sum = 0;
        for (int i = 1; i <= 10; i++)
        {
            if (i % 2 == 0)
            {
                sum = sum + i;
            }
        }
        Console.WriteLine("Sum of first 10 even numbers: " + sum);
    }
}