<?php

namespace Foo\Bar\Domain\Service;

use Foo\Bar\Infrastructure\Repository\UserMySqlRepository;

class UserService
{
	public function __construct(
		UserMySqlRepository $repo
	) {
		// ...
	}
}
