---
title: "Practical Guide to Value Objects in Go"
date: 2025-06-11
draft: false
description: "When building software, especially complex information systems and enterprise-grade applications, clarity and reliability are always front of mind. Learn how value objects can help solve primitive obsession."
---

When building software, especially complex information systems and enterprise-grade applications, clarity and reliability are always front of mind for me. One problem I've consistently observed, across many languages, is "primitive obsession", relying excessively on primitive types and overly defensive coding. This approach often clutters the codebase and makes maintenance difficult.

My go to solution to this is the use of Value Objects. Let me share why they've become an essential part of my Go coding toolkit and how they might help you too.

## What Are Value Objects?

Simply put, value objects are immutable constructs within your domain model, designed to represent specific, validated attributes. Validation happens inside the constructor or factory method, so you can be sure every value object is valid the moment it's created. Since they're also immutable, that validity sticks for the lifetime of the object. They're also considered equal based on their value rather than their memory addresses.

## Why Use Value Objects?

Using value objects improves your domain model for a few reasons. They centralise validation so you don't have to repeat the same checks everywhere. They make method signatures clearer, replacing loose primitives with meaningful types. And because they're immutable, they stay valid from the moment they're created to the entire application lifecycle.

Making illegal states unrepresentable is what this is all about. The goal is to prove that every runtime value, without exception, represents a valid object in the domain model. This is the core reason. The positive effect this has on eliminating meaningless validations is hard to overstate.

## Practical Example: Refactoring with Value Objects in Go

Let's imagine a function that apply a discount to an item. Without Value Objects, you'd typically see something along of:

```go
func applyDiscount(percent float64) error {
  
  // This check will likely spread throughout you code base.
  // This likely duplicated by the caller or other functions 
  // that also deal with percentage values
  if percent < 0 || percent > 100 {
    return errors.New("percentage must be between 0 and 100")
  }

  // Business logic...
  return nil
}
```

It's impossible to guarantee that the caller of applyDiscount has validated the percentage, so you might end up duplicating the same `if percent < 0 || percent > 100` check in multiple places. As the codebase grows, other functions like applyLoyaltyDiscount will likely accept the same float64 and require the same validation too.

Here's how we can solve this with a Percentage value object:

```go
type Percentage struct {
  value float64
}

func NewPercentage(value float64) (Percentage, error) {
  if value < 0 || value > 100 {
    return Percentage{}, errors.New("percentage must be between 0 and 100")
  }

  return Percentage{value: value}, nil
}

func applyDiscount(percent Percentage) error {
  // Apply discount can assume percentage is valid since validation 
  // happens in its constructor
  
  // Business logic...
  return nil
}
```

By using the Percentage value object, validation logic becomes centralised, and invalid percentage amounts cannot be created anywhere in the system. Method signatures become more expressive, and the apply function is free of noise.

## Caveats in Go: Zero Values

One thing to watch out for when applying this approach in Go is how the language handles zero values. Unlike some languages where objects must be explicitly constructed, Go allows structs to be created with all fields set to their zero values by default.

This can make it harder to guarantee that all value objects are valid, since it's easy to accidentally bypass validation logic by declaring a value object directly instead of using a constructor or factory method. For example, if you declare a `Percentage{}` instead of using NewPercentage, you end up with an invalid object that still compiles and runs.

To avoid this, you should:

- Always use constructors or factory functions to create value objects
- Keep struct fields unexported to prevent direct assignment. This should lead users to use the object constructor function

These will preserve the idea that illegal states should be unrepresentable even in a language like Go that doesn't give you that out of the box.

## When to Use and When to Avoid Value Objects

If you find yourself validating primitive values repeatedly, that's a good signal to introduce a new type. You can make better use of primitives such uint instead of validation if amount is negative for example, but in most cases, introducing value objects early pays off. It makes your code easier to extend later on.

A red flag: if you find something like `myObject.IsValid()`, this is a great opportunity to introduce a value object and push this validation to the edge of your application.

Making illegal states unrepresentable becomes an obsession after you start applying it.

## Equality by Value

Here's a quick Go snippet demonstrating how value objects handle equality in Go:

```go
func main() {
  p1, _ := NewPercentage(15.5)
  p2, _ := NewPercentage(15.5)

  fmt.Println("Are percentages equal?", p1 == p2) // true
}
```

In Java, this is a bit more complicated to be achieved, but it's achievable as well.

## Wrapping Up

Value objects help you push validation to the edges of your system, locking in correctness from the start. Once created, they can't go into invalid states, which means less defensive code and fewer bugs downstream. They also make code more readable by replacing loose primitives with meaningful types.

The key is discipline: don't let callers bypass your constructors. Keep fields private, avoid IsValid checks, and make sure every value object reflects a valid concept in your domain.