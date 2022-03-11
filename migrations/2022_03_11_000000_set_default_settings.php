<?php

/*
 * This file is part of block-cat/default.
 *
 * Copyright (c) Iulian Cernei.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        /**
         * @var $settings SettingsRepositoryInterface
         */
        $settings = resolve(SettingsRepositoryInterface::class);

        $defaultSettings = [
            // use for icon name for 'allDiscussions'
            'allDiscussionsIcon' => ['value' => "", 'imageHelpURL' => "https://i.imgur.com/TjxJ8V9.png"],
            // use for icon name for 'Drafts'
            'draftsIcon' => ['value' => "", 'imageHelpURL' => "https://i.imgur.com/khTNC2T.png"],
            // use if should hide sidemenu on main page
            'mainPageMenu' => ['value' => 0, 'imageHelpURL' => "https://i.imgur.com/dE5jKit.png"],
            // use if should hide 'toolbar' on main page
            'toolbar' => ['value' => 0, 'imageHelpURL' => "https://i.imgur.com/Z7YLLnZ.png"],
            // use if should hide 'refresh' button on main page
            'refreshButton' => ['value' => 0, 'imageHelpURL' => "https://i.imgur.com/dfFP1Yx.png"],
            // use if should hide 'markAllAsRead' button on main page
            'markAllAsReadButton' => ['value' => 0, 'imageHelpURL' => "https://i.imgur.com/93Tq91h.png"],
            // use if should hide discussion menu on discussion page
            'discussionMenu' => ['value' => 0, 'imageHelpURL' => "https://i.imgur.com/BtspCpS.png"],
            // use if should hide controls button on discussion page
            'controlsButton' => ['value' => 0, 'imageHelpURL' => "https://i.imgur.com/Vw5mnsP.png"],
            // use if should hide scrubber on discussion page
            'scrubberDiv' => ['value' => 0, 'imageHelpURL' => "https://i.imgur.com/KVJCX0z.png"],
            // use if should place post controls on header
            'postControlsUp' => ['value' => 0, 'imageHelpURL' => "https://i.imgur.com/OWxqZsZ.png"],
            // use if should merge disussion controls with post controls
            'discussionControlsToPost' => ['value' => 0, 'imageHelpURL' => "https://i.imgur.com/ecCKh5K.png"],
            // use if should hide post count for every discussion on main page
            'postCount' => ['value' => 0, 'imageHelpURL' => "https://i.imgur.com/fxZ7Auw.png"],
            // use if should place home button on main page
            'emoldovaButton' => ['value' => 0, 'imageHelpURL' => "https://i.imgur.com/aYSE20a.png"],
            // use if should hide post reply on discussion page
            'postReply' => ['value' => 0, 'imageHelpURL' => "https://i.imgur.com/YQpjmyK.png"],
            // use if should hide 'terminalPost' for every discussion on main page
            'terminalPost' => ['value' => 0, 'imageHelpURL' => "https://i.imgur.com/ysv23gn.png"],
            // use if should hide 'pane' discussion page
            'pane' => ['value' => 0, 'imageHelpURL' => "https://i.imgur.com/OqGwqEi.png"],
        ];

        $settings->set('block-cat.default_settings', json_encode($defaultSettings));
    },
    'down' => function (Builder $schema) {
        /**
         * @var $settings SettingsRepositoryInterface
         */
        $settings = resolve(SettingsRepositoryInterface::class);

        $settings->delete('block-cat.default_settings');
    },
];
