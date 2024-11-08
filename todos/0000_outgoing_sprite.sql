CREATE TABLE `todos` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`status` text NOT NULL,
	`createdAt` text NOT NULL,
	`updatedAt` text NOT NULL,
	`user` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `users` (
	`user` text PRIMARY KEY NOT NULL
);
