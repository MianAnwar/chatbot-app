import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
  imports: [FormsModule, MarkdownComponent],
})
export class AppMarkdownComponent {
  @Input() markdown = '```python\n# Program to add two numbers\n\n# Method 1: Using hardcoded numbers\nnum1 = 10\nnum2 = 25\nsum_result = num1 + num2\nprint(f\"The sum of {num1} and {num2} is: {sum_result}\")\n\nprint(\"-\" * 30) # Separator for clarity\n\n# Method 2: Taking input from the user\ntry:\n    num_a = float(input(\"Enter the first number: \"))\n    num_b = float(input(\"Enter the second number: \"))\n\n    sum_user_input = num_a + num_b\n    print(f\"The sum of {num_a} and {num_b} is: {sum_user_input}\")\n\nexcept ValueError:\n    print(\"Invalid input. Please enter valid numbers.\")\n\n```\n\n**Explanation:**\n\n1.  **Hardcoded Numbers:**\n    *   `num1 = 10` and `num2 = 25`: We define two variables and assign them fixed numerical values.\n    *   `sum_result = num1 + num2`: The `+` operator performs the addition.\n    *   `print(f\"...\")`: This line uses an f-string (formatted string literal) to display the result in a readable way.\n\n2.  **User Input:**\n    *   `input(\"Enter the first number: \")`: This function prompts the user to enter text from the keyboard. Whatever the user types is returned as a string.\n    *   `float(...)`: Since `input()` returns a string, we convert it to a floating-point number (which can handle decimals) using `float()`. If you only expect whole numbers, you could use `int()`.\n    *   `sum_user_input = num_a + num_b`: Again, the `+` operator adds the two numbers.\n    *   `try...except ValueError`: This is a basic error-handling block.\n        *   The code inside `try` will be executed.\n        *   If the user enters something that cannot be converted to a number (like \"hello\"), a `ValueError` will occur.\n        *   The `except ValueError:` block catches this specific error and prints a user-friendly message instead of crashing the program.  ';
}
