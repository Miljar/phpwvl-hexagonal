<?php

class BlogAdminController
{
	public function createAction($request)
	{
		// create form etc.

		if ($request->isPost()) {
			$command = new SaveBlogPost(
				$request->get('title'),
				$request->get('content'),
				$request->get('tags', [])
			);

			$handler = $this->get('save_blogpost_handler');
			$handler->handle($command);

			$response->redirect('/foo');
		}

		// display template
	}
}
