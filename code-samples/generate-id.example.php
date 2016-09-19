<?php

class BlogAdminController
{
	public function createAction($request)
	{
		// create form etc.

		if ($request->isPost()) {

			$id = $this->generator->generateId();

			$command = new SaveBlogPost(
				$id,
				$request->get('title'),
				$request->get('content'),
				$request->get('tags', [])
			);

			$this->commandBus->handle($command);

			$response->redirect('/details/' . $id);
		}

		// display template
	}

	public function updateAction($request)
	{
		// create form etc.

		if ($request->isPost()) {
			$command = new SaveBlogPost(
				$request->get('id'),
				$request->get('title'),
				$request->get('content'),
				$request->get('tags', [])
			);

			$this->commandBus->handle($command);

			$response->redirect('/details/' . $id);
		}

		// display template
	}
}
