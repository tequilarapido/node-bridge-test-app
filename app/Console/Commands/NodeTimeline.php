<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Tequilarapido\NodeBridge\NodeException;
use Tequilarapido\NodeBridge\PipeNodeScript;

class NodeTimeline extends Command
{
    protected $signature = 'node:timeline';

    public function handle()
    {
        $this->info('Running a node script and getting result');

        $nodeScript = (new PipeNodeScript)
            ->setNodeExecutable('/usr/local/bin/node')
            ->setScript(realpath(app_path('../node/timeline.js')));

        try {
            $result  = $nodeScript
                ->echoPipe(json_encode([
                    'keyword' => 'Noublie jamais',
                    'timezone' => -120,
                ]))
                ->output();

            $json = explode("\n", $result)[1];
            dd(json_decode($json));
        }
        catch(NodeException $e) {
            $this->error($e->getMessage());
        }


    }

}
