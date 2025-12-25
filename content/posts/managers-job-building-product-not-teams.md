---
title: "The Manager's Job: Building Products, Not Teams"
date: 2025-11-22
draft: true
description: "Your job as a manager is not to build a team. It's to build a product through the team. That reframe changed how I think about the role."
---

For a few years, I worked as an engineering manager. I thought the job was about building a great team: hire well,
foster the right environment, give feedback on behaviors, and step back from technical decisions.

So that's what I did. I stepped back from the code, from product decisions, from architecture discussions. I thought
that's what good managers did.

And yet something felt off. I was holding back my opinions on the things I cared about most. It made me sad at times,
though I couldn't quite articulate why. After I left the role and returned to being an individual contributor, I spent a
lot of time reflecting on what I'd do differently.

This post is the result of that reflection.

## The Reframe

Here's the mental model I wish I'd had earlier:

**Your job as a manager is not to build a team. Your job is to build a product through the team.**

The team is essential, but it's not the goal. The product is the goal. The team is how you get there.

This might sound like a subtle distinction, but it fundamentally changes how you see the world. For managers, it
reframes what the job actually is. For individual contributors, it clarifies what the manager role is about and makes
the power dynamics easier to navigate.

## A Thought Experiment

Here's a thought experiment that helped shape my new understanding:

Imagine you're building a product from the ground up, alone. Founder, developer, everything.

If you could deliver everything yourself, would you ever hire someone? The logical answer is no. You'd only hire when
you couldn't deliver alone.

So you hire a first person, then a second, and you finally have a team. Note that at no point does your job shift from "build the product" to "build the team."
The job stays the same: deliver the product. You're just doing it through people now because that's the only way to
scale and achieve the goals you've set.

This doesn't change as you grow. At 5 people or 500, the job is the same: build the product. What changes is how you do
it, not what you're doing.

I've seen people lose sight of this. At some point, "building the team" becomes the goal itself. Managers obsess over
team size, dynamics, rituals, and culture as ends in themselves. Hiring plans optimize for headcount growth rather than
delivery capacity. The company starts to feel like it exists to perpetuate itself rather than to create products and
services. That's when things go sideways.

The team is a means, not an end. So is the manager. So is the entire company. None of it matters if there's no
product.

## Stay Close to the Work

This reframe changes where you put your attention. Everything becomes about the product. The cultural and behavioral
stuff doesn't disappear, but it becomes secondary, a natural byproduct of getting the work right.

Staying close means doing code reviews, joining architectural discussions, weighing in on product decisions. Ideally,
even finding time to code. It keeps you in contact with reality and keeps your craft sharp.

This gets harder at scale. You naturally step back from individual PRs and many discussions. But the principle holds. What changes is what "the work" means at your level: less about code, more about major technical decisions, roadmapping, prioritization, delivery. Stay close to that.

Even so, find time to review code and write code when you can, regardless of scale. There's a lot to learn when you do that. You experience what every engineer on your team is experiencing. You see the friction points, the tooling gaps, the areas where the architecture makes things harder than they should be. That insight doesn't come from reports or metrics. It comes from doing the work.

Staying close to the work doesn't mean controlling everything. But the buck stops with the manager. The final decision is with the manager. This isn't about power. It's about alignment. You can't hold the manager accountable for technical decisions if the manager isn't the main decision maker. If the manager answers for the outcomes, the manager has to make the calls.

The way managers avoid becoming bottlenecks is by raising the level of autonomy team members have. There's no such thing as "full autonomy." What exists are clear boundaries and clear levels of autonomy: a shared understanding of when to escalate decisions and when not to. The more alignment on direction and trust you build, the higher autonomy levels can rise.

## Critique the Work

You don't have to be the best programmer on the team. But you need good technical taste. Without it, you can't critique
the work. And if you can't critique the work, all that's left is feedback on behavior: how someone communicates,
collaborates, whether they seem engaged. That's not nothing, but it's not the job.

> The manager who can't critique the work becomes a manager of people and vibes.

This shift changed even the language I use. I've moved away from the word "feedback," which puts too much focus on the
person, and now prefer "critique of the work." It's a small change, but it shifts the frame from behavior to what's
actually being delivered. We're not discussing what's wrong with you. We're discussing how to make the product better.

Here's an example. Say someone on your team ships a feature that's buggy and poorly tested. The behavioral approach
would be: "You need to be more careful" or "You should pay more attention to quality." That's vague. It's about them.

The work-focused approach: "This feature had three bugs in production. The test coverage missed edge cases X and Y.
Let's look at what testing approach would have caught these." Now we're talking about the work. What was delivered, what
was missing, how to improve it. Same issue, different frame.

This includes work beyond the code itself. If someone's code reviews are toxic and slowing down the team, that's a work
problem, not a personality issue. Critique it as such.

## When It's OK to Go Personal

The manager isn't a parent. Everyone on the team is an adult, responsible for their own growth and career.

Mentor/mentee relationships happen, and they're fine. Mentoring opens space for things beyond the work: subtle tips on
how to grow, advice that goes past what the role demands. These conversations can be valuable.

But this isn't the manager's job. The manager's job is building the product through the team. If mentoring happens
alongside that, great. But it's worth keeping these things somewhat separate.

## If I Were to Manage Again

Staying close to the work is genuinely difficult. The role pulls you toward meetings, processes, and people bureaucracy.
Without support from others, you will drown. I'm speaking from experience.

All this is a result of deep reflection on my experience as a manager, and I'm sure applying this framing in a real
management role won't be easy. But here's what I would do if I were to manage again:

**Get buy-in at all levels.** Before taking the role, I'd need execs, HR, and people at all levels aligned on this frame. Otherwise, bureaucracy wins. You get dragged into meetings, processes, people management. Technical work becomes the last thing you do.

**Make the hierarchy explicit.** There's no such thing as full autonomy, only levels of autonomy. I'd clarify what
decisions each role and team owns, and where accountability sits. In the end, someone has answers to customers,
investors, the board, the founder. That's the manager.

**No friends or family on the team.** Talking about power, authority, and accountability is hard with people you love.
When everything is about the product, things can get transactional. Better to keep those relationships separate.

**Cut administrative overhead.** If a process doesn't help build the product, opt out, automate it, or do the minimum
for compliance. Don't let "manager work" crowd out actual work.

**Don't hold back technical opinions.** Even when they conflict with more senior engineers, especially on high-risk,
hard-to-reverse decisions where you're accountable for the outcome. Good technical taste has value. Withholding it
doesn't make a better manager.

**Lead by example.** Good examples in code reviews and code are the most effective way to set technical direction.

**Listen first, decide clearly.** Let the team debate first to hear unfiltered views. But don't let a bad consensus form
just to be polite. Listen, synthesize, set the technical direction.

## Take What's Useful

Judge this post by its usefulness, not by whether it's right or wrong. I'm offering a frame, a lens to see the manager's
job differently. Other ways to look at it exist, and they might be more useful depending on your skills and context.

I remember watching *Ted Lasso*, the show about a soccer coach who knows almost nothing about soccer but builds a great
team anyway. At the time, it reinforced my belief that managers should focus on culture, and that technical depth didn't
matter.

There's a situation where that works: when you have someone with extreme technical depth that you trust deeply. Ted had
Coach Beard. In that setup, you're not making the technical calls. You're backing up your expert when conflicts arise.

I've seen this work. But it requires a level of trust that's rare. And if that person leaves or the trust breaks down,
you're exposed. For most of us, staying close to the work is the safer path.

## What Stays With Me

I'm no longer a manager. But this framing still shapes how I work.

When I receive critique, I don't take it personally. It's about the work, not about me. When I offer critique to peers,
I keep that same focus. The question isn't "what's wrong with you" but "how do we make the product and the work better."

If I ever manage again, I'll try to hold on to that focus. Stay close to the work. Keep everything about the product.
The team matters deeply, but it's not the point. The product is the point.
