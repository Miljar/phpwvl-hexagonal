<?php

class SaveBlogPostHandler
{
	private $repo;

	public function __construct(BlogPostRepository $repo)
	{
		$this->repo = $repo;
	}

	public function handle(SaveBlogPost $command)
	{
		$post = BlogPost::createNew(
			$command->getTitle(),
			$command->getContent()
		);

		$post->addTags($command->getTags());

		$this->repo->add($post);
	}
}
