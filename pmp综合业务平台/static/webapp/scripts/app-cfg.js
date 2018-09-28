/*
 * Copyright 2005-2015 Alfresco Software, Ltd. All rights reserved.
 * License rights for this program may be obtained from Alfresco Software, Ltd.
 * pursuant to a written agreement and any use of this program without such an
 * agreement is prohibited.
 */
'use strict';

var ACTIVITI = ACTIVITI || {};

ACTIVITI.CONFIG = {
	'onPremise' : true,
	'contextRoot' : '', // activiti的js访问的根路径，必须和application.yml文件中的context-path一致，因为js里加了"/"，故这里不加
	'webContextRoot' : '' // activiti的流程设计器根路径，必须和application.yml文件中的context-path一致
};
/*
 * Copyright 2005-2015 Alfresco Software, Ltd. All rights reserved.
 * License rights for this program may be obtained from Alfresco Software, Ltd.
 * pursuant to a written agreement and any use of this program without such an
 * agreement is prohibited.
 */
//
// DEV ENV OVERRIDES
//

