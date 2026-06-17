CREATE TABLE `blog_posts` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`slug` text NOT NULL,
	`excerpt` text NOT NULL,
	`content` text NOT NULL,
	`author` text NOT NULL,
	`category` text NOT NULL,
	`tags` text NOT NULL,
	`published_at` text NOT NULL,
	`read_time` integer DEFAULT 5 NOT NULL,
	`featured` integer DEFAULT false NOT NULL,
	`created_at` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `blog_posts_slug_unique` ON `blog_posts` (`slug`);--> statement-breakpoint
CREATE TABLE `job_positions` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`department` text NOT NULL,
	`location` text NOT NULL,
	`type` text NOT NULL,
	`experience` text NOT NULL,
	`description` text NOT NULL,
	`responsibilities` text NOT NULL,
	`requirements` text NOT NULL,
	`created_at` integer
);
--> statement-breakpoint
CREATE TABLE `portfolio_items` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`client` text NOT NULL,
	`category` text NOT NULL,
	`description` text NOT NULL,
	`results` text NOT NULL,
	`technologies` text NOT NULL,
	`image` text,
	`featured` integer DEFAULT false NOT NULL,
	`created_at` integer
);
--> statement-breakpoint
CREATE TABLE `services` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`features` text NOT NULL,
	`icon` text NOT NULL,
	`created_at` integer
);
--> statement-breakpoint
CREATE TABLE `team_members` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`role` text NOT NULL,
	`department` text NOT NULL,
	`bio` text NOT NULL,
	`expertise` text NOT NULL,
	`image` text,
	`created_at` integer
);
--> statement-breakpoint
CREATE TABLE `testimonials` (
	`id` text PRIMARY KEY NOT NULL,
	`content` text NOT NULL,
	`author` text NOT NULL,
	`role` text NOT NULL,
	`company` text NOT NULL,
	`rating` integer DEFAULT 5 NOT NULL,
	`created_at` integer
);
