<?php

class SaveBlogPost
{
	private $title;
	private $content;
	private $tags = [];

	public function __construct($title, $content, $tags)
	{
		$this->title = $title;
		$this->content = $content;
		$this->tags = $tags;
	}
}
