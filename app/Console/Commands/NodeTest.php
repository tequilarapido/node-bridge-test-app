<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Tequilarapido\NodeBridge\NodeException;
use Tequilarapido\NodeBridge\PipeNodeScript;

class NodeTest extends Command
{
    protected $signature = 'node:test';

    public function handle()
    {
        $this->info('Running a node script and getting result');

        $nodeScript = (new PipeNodeScript)
            ->setNodeExecutable('/usr/local/bin/node')
            ->setScript(realpath(app_path('../node/test.js')));

        try {
            $result  = $nodeScript
                ->echoPipe('this is from node:test command')
                ->json();

            dd($result);
        }
        catch(NodeException $e) {
            $this->error($e->getMessage());
        }


    }

}
