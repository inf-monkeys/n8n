import type express from 'express';
import { authorize } from '../../shared/middlewares/global.middleware';
import Container from 'typedi';
import { NodeTypes } from '@/NodeTypes';

const nodeTypes = Container.get(NodeTypes);

export = {
	getNodes: [
		authorize(['owner', 'member']),
		async (req: any, res: express.Response): Promise<express.Response> => {
			const {
				types: { nodes },
			} = nodeTypes.getNodesAndCredentials();
            return res.json(nodes);
		},
	],
};
