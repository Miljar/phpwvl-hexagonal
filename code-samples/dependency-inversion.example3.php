<?php

namespace Foo\Bar\Infrastructure\Repository\UserMySqlRepository;

use Foo\Bar\Domain\Repository\UserRepository;

class UserMySqlRepository implements UserRepository
{
	public function __construct(
		UserRepository $repo
	) {
		// ...
	}
}
