import type { INodeProperties } from 'n8n-workflow';

import * as create from './create.operation';
import * as executeResponder from './executeResponder.operation';
import * as get from './get.operation';
import * as search from './search.operation';
import * as update from './update.operation';

export { create, executeResponder, get, search, update };

export const description: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		default: 'getMany',
		type: 'options',
		noDataExpression: true,
		required: true,
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a task',
			},
			{
				name: 'Execute Responder',
				value: 'executeResponder',
				action: 'Execute responder on a task',
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a task',
			},
			{
				name: 'Search',
				value: 'search',
				action: 'Search tasks',
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a task',
			},
		],
		displayOptions: {
			show: {
				resource: ['task'],
			},
		},
	},
	...create.description,
	...executeResponder.description,
	...get.description,
	...search.description,
	...update.description,
];