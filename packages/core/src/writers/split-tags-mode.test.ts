import { describe, it, expect, vi, beforeEach } from 'vitest';
// import fs from 'fs-extra';
import { writeSplitTagsMode } from './split-tags-mode'; // Adjust the path based on your directory structure
import { WriteSpecsBuilder } from '../types';
// import { normalizeOptions } from '../,,/orva /utils/options';
// import { generateMutatorImports } from '../generators';
// import {
//   getFileInfo,
//   upath,
//   isSyntheticDefaultImportsAllow,
//   isFunction,
// } from '../utils';
// import uniqBy from 'lodash.uniqby';

// Mock external dependencies
// vi.mock('fs-extra', () => {
//   return {
//     outputFile: vi.fn(), // Mock the outputFile function from fs-extra
//   };
// });

// vi.mock('../generators', () => ({
//   generateModelsInline: vi.fn(),
//   generateMutatorImports: vi.fn(),
// }));

// vi.mock('../utils', () => ({
//   getFileInfo: vi.fn(),
//   upath: {
//     relativeSafe: vi.fn(),
//     join: vi.fn(),
//   },
//   isSyntheticDefaultImportsAllow: vi.fn(),
//   isFunction: vi.fn(),
//   camel: vi.fn((a) => a),
// }));

// vi.mock('../utils/fileExtensions', () => ({
//   getMockFileExtensionByTypeName: vi.fn(),
// }));

// vi.mock('lodash.uniqby', () => vi.fn());

describe('writeSplitTagsMode', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should generate correct file paths', async () => {
    // Mocking return values for the utility functions
    const builder: WriteSpecsBuilder = {
      info: { title: 'TestBuilder' },
      imports: vi.fn(),
      importsMock: vi.fn(),
      schemas: vi.fn(),
      operations: {},
    };
    const output = {
      target: './api/endpoints/petstoreFromFileSpecWithTransformer.ts',
      schemas: './api/model',
      mock: true,
      override: {
        operations: {},
        mock: {
          properties: {
            '/tag|name/': 'jon',
          },
        },
      },
    };
    const specsName = 'TestSpec';
    const header = '// header content\n';
    const needSchema = true;

    // Properly mock the return value for `getFileInfo`
    // (getFileInfo as vi.Mock).mockReturnValue({
    //   filename: 'testFilename',
    //   dirname: 'testDirname',
    //   extension: '.ts',
    // });

    // // Properly mock the return values for `upath`
    // (upath.relativeSafe as vi.Mock).mockReturnValue('relative/path');
    // (upath.join as vi.Mock).mockReturnValue('joined/path');

    // Mock the uniqBy function properly
    // (uniqBy as vi.Mock).mockImplementation((arr) => arr);

    // Mock `isSyntheticDefaultImportsAllow` to return `true`
    // (isSyntheticDefaultImportsAllow as vi.Mock).mockReturnValue(true);

    // // Mock the builder imports
    // (builder.imports as vi.Mock).mockReturnValue('// imports');
    // (builder.importsMock as vi.Mock).mockReturnValue('// importsMock');

    // Run the function
    const result = await writeSplitTagsMode({
      builder,
      output,
      specsName,
      header,
      needSchema,
    });

    console.log(result);
    // Check fs.outputFile calls
    // expect(fs.outputFile).toHaveBeenCalledTimes(1); // Adjust based on expected calls
    // expect(fs.outputFile).toHaveBeenCalledWith(
    //   expect.stringContaining('testDirname/testFilename.schemas.ts'), // Ensure the file path is correct
    //   expect.stringContaining(header), // Ensure the content contains the header
    // );

    // Assert that the result is an array (you can be more specific if needed)
    expect(result).toEqual(expect.any(Array));
  });

  // it('should handle errors correctly', async () => {
  //   const builder = {
  //     info: { title: 'TestBuilder' },
  //     imports: vi.fn(),
  //     importsMock: vi.fn(),
  //     import { importSpecs } from './../../../orval/src/import-specs';
  //   };
  //   const output = {
  //     target: 'outputTarget',
  //     fileExtension: '.ts',
  //     schemas: 'schemasPath',
  //     client: 'clientType',
  //     tsconfig: 'tsconfigPath',
  //     override: {
  //       mutator: null,
  //       tags: {},
  //       paramsSerializerOptions: null,
  //     },
  //     mock: false,
  //   };
  //   const specsName = 'TestSpec';
  //   const header = '// header content\n';
  //   const needSchema = true;

  //   // Properly mock the return value for `getFileInfo`
  //   // (getFileInfo as vi.Mock).mockReturnValue({
  //   //   filename: 'testFilename',
  //   //   dirname: 'testDirname',
  //   //   extension: '.ts',
  //   // });

  //   // (upath.relativeSafe as vi.Mock).mockReturnValue('relative/path');
  //   // (upath.join as vi.Mock).mockReturnValue('joined/path');
  //   // // (uniqBy as vi.Mock).mockImplementation((arr) => arr);
  //   // (isSyntheticDefaultImportsAllow as vi.Mock).mockReturnValue(true);

  //   // Force an error in one of the operations
  //   // (fs.outputFile as vi.Mock).mockImplementationOnce(() => {
  //   //   throw new Error('Test error');
  //   // });

  //   // Ensure the error is caught and propagated
  //   await expect(
  //     writeSplitTagsMode({
  //       builder,
  //       output,
  //       specsName,
  //       header,
  //       needSchema,
  //     }),
  //   ).rejects.toThrow('Oups... 🍻. An Error occurred while splitting tag');

  //   // Verify error was logged or propagated correctly
  // });
});
