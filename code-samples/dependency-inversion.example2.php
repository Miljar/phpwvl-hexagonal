<?php

namespace Foo\Bar\Domain\Service;

use Foo\Bar\Domain\Repository\UserRepository;

class UserService
{
	public function __construct(
		UserRepository $repo
	) {
		// ...
	}
}
